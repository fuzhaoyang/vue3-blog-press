'use strict';


const util = {
    math: {
        degToRad: alpha => alpha * Math.PI / 180,

        polarToDecart: (alpha, r) => {
            alpha = this.degToRad(alpha);
            return { x: r * Math.cos(alpha), y: r * Math.sin(alpha) };
        }
    },

    color: {
        random: (opts = {}) => {
            let h, s, l;

            h = opts.hue || Math.floor(Math.random() * 360);
            s = opts.saturation || Math.floor(Math.random() * 101);
            l = opts.lightness || Math.floor(Math.random() * 101);

            return `hsl(${h}, ${s}%, ${l}%)`;
        }
    }
};




/**
 * Make a contenteditable element more controllable
 */
class FunkyLetters {
    /**
     * Constructor
     * @param  {Element} el  document element with contenteditable=true or selector
     * @param  {Object} [opts] options
     */
    constructor(el, opts = {}) {
        if (typeof el == 'string') {
            el = document.querySelector(el);
        }
        this.container = el;
        this.options = opts;
        this._splitLetters();
        this._listenToInput();
    }


    /**
     * Split container's text into one letter spans optionally colored
     */
    _splitLetters() {
        this.container.innerHTML = FunkyLetters.splitTextLetters(this.container.textContent, this.options);
    }


    /**
     * Split the text into one letter spans
     * @param  {string} text input text
     * @param  {Object} [opts] options
     * @return {string}      html with text split into letters
     */
    static splitTextLetters(text, opts = {}) {
        let letters;

        text = text.replace(/\s+/, ' ');
        letters = text.split(/(?=.)/);

        return letters.reduce((a, b) => a + FunkyLetters.makeLetterHtml(b, opts), '');
    }


    /**
     * Generate html string for a letter
     * @param  {string} letter single letter
     * @param  {Object} [opts]   options
     * @return {string}        html string
     */
    static makeLetterHtml(letter, opts = {}) {
        let style = '',
            className = 'char';

        if (/\s/.test(letter)) {
            letter = '&nbsp;';
            className += ' space';
        } else {
            className += ' letter';
        }
        if (opts.colorize) {
            style += 'color:' + util.color.random({ saturation: 100, lightness: 50 }) + ';';
        }

        return `<span class="${className}" ${style && 'style="' + style + '"'}><span class="letter-inner">${letter}</span></span>`;
    }


    /**
     * Watch input
     */
    _listenToInput() {
        let me = this;
        // this.container.dataset.text = this.container.textContent;

        this.container.addEventListener('keydown', function(e) {
            let letterEl = me.getFocusLetter();

            if (e.key.length === 1 && !e.altKey && !e.ctrlKey) {
                e.preventDefault();
                me.insertText(e.key);
                return;
            }

            // If the container is empty
            if (!letterEl) return;

            switch (e.key) {
                // Firefox focuses in two steps on inline-block elements
                case 'ArrowRight':
                    if (navigator.userAgent.indexOf('AppleWebKit') !== -1) break;
                    if (!letterEl.nextElementSibling) break;
                    e.preventDefault();
                    me.setFocus(letterEl.nextElementSibling, 1);
                    break;

                case 'ArrowLeft':
                    if (navigator.userAgent.indexOf('AppleWebKit') !== -1) break;
                    e.preventDefault();
                    if (!letterEl.previousElementSibling) {
                        me.setFocus(letterEl, 0);
                    } else {
                        me.setFocus(letterEl.previousElementSibling, 1);
                    }
                    break;

                case 'ArrowUp':
                case 'ArrowDown':
                    e.preventDefault();
                    break;

                case 'Home':
                case 'PageUp':
                    e.preventDefault();
                    me.setFocus(this.firstElementChild, 0);
                    break;

                case 'End':
                case 'PageDown':
                    e.preventDefault();
                    me.setFocus(this.lastElementChild, 1);
                    break;
            }
        });

        this.container.addEventListener('input', function() {
            // Firefox leaves empty containers when text is deleted. Make sure those are deleted too.
            me._cleanEmpty();
        });

        this.container.addEventListener('paste', function(e) {
            if (e.clipboardData.types.indexOf('text/plain') != -1) {
                e.preventDefault();
                me.insertText(e.clipboardData.getData('text/plain'));
            }
        });
    }

    /**
     * Format text and insert it into the container at the caret position
     * @param  {string} text the text to insert
     */
    insertText(text) {
        let sel = document.getSelection(),
            //range = document.createRange(),
            node = this.getFocusLetter(),
            isBeforeNode = sel.focusOffset === 0;

        sel.deleteFromDocument();
        if (!node) {
            this.container.insertAdjacentHTML('afterbegin', FunkyLetters.splitTextLetters(text, this.options));
            this.setFocus(Array.from(this.container.querySelectorAll('.char')).pop(), 1);
        } else if (isBeforeNode) {
            node.insertAdjacentHTML('beforebegin', FunkyLetters.splitTextLetters(text, this.options));
            this.setFocus(node.previousElementSibling, 1);
        } else {
            node.insertAdjacentHTML('afterend', FunkyLetters.splitTextLetters(text, this.options));
            for (let i = text.length; i > 0 && node.nextElementSibling; i--) {
                node = node.nextElementSibling;
            }
            this.setFocus(node, node.textContent.length);
        }

        this.container.dataset.changed = true;
        this._cleanEmpty();
    }

    /**
     * Get the character in focus (at caret position)
     * @return {Element} the element node in focus
     */
    getFocusLetter() {
        const sel = document.getSelection();
        return sel.anchorNode.closest ? sel.anchorNode.closest('.char') : sel.anchorNode.parentElement.closest('.char');
    }

    /**
     * Set cursor position
     * @param {Element} node   letter element to focus on
     * @param {Integer} offset offset. In our case, either 0 or 1
     */
    setFocus(node, offset) {
        const sel = document.getSelection(),
            range = document.createRange();

        range.setStart(node, offset);
        sel.removeAllRanges();
        sel.addRange(range);
    }

    /**
     * Delete elements other than .char the browser could have generated
     */
    _cleanEmpty() {
        const focusLetter = this.getFocusLetter();
        Array.from(this.container.children).forEach(el => {
            if (el.classList.contains('char') && el.textContent) return;
            if (el === focusLetter) {
                if (el.previousElementSibling) {
                    this.setFocus(el, 1);
                } else if (el.nextElementSibling) {
                    this.setFocus(el.nextElementSibling, 1);
                }
            }
            el.remove();
        });
    }
}





/**
 * Control animations of an element's children
 */
class Animator {
    /**
     * Constructor
     * @param  {Element|string} el the container element whose children are being animated
     */
    constructor(el) {
        this.container = el;
        this._removeClassTimer = null;

        // this.container.addEventListener('animationend', () => {
        // 	clearTimeout(this._removeClassTimer);
        // 	this._removeClassTimer = setTimeout(() => {
        // 		this.container.classList.remove('anim');
        // 	}, 900);
        // });
    }


    /**
     * Run animation using the effect
     * @param  {string} effect effect name
     */
    animate(effect) {
        const cont = this.container;
        if (cont.classList.contains('anim')) {
            cont.classList.remove('anim');
            setTimeout(() => {
                this.animate(effect);
            }, 50);
            return;
        }
        clearTimeout(this._removeClassTimer);
        cont.classList.add('anim');
        if (cont.dataset.effect === effect && !('changed' in cont.dataset)) return;
        cont.dataset.effect = effect;
        delete cont.dataset.changed;
        // if(effect !== 'converge'/* && effect !== 'spiral'*/ && effect !== 'meteorite') {
        // 	Array.prototype.forEach.call(cont.children, function(el) {
        // 		el.style.transform = '';
        // 	});
        // }
        if (!Animator.effects[effect]) {
            throw new Error(`Animator: effect ${effect} is not defined`);
        }
        if (Animator.effects[effect].delays) {
            this.distributeDelays(Animator.effects[effect].delays);
        } else {
            this.distributeDelays({ shift: false });
        }
    }


    /**
     * Distribute animation delays
     * @param  {Object} opts           options
     * @param  {Object} opts.shift     shift each next item this much milliseconds
     * @param  {Object} [opts.random]  distribute delays randomly: without regard to document order
     * @param  {Object} [opts.reverse] distribute delays in reverse document order starting with the last element
     */
    distributeDelays(opts) {
        let shift = opts.shift != null ? opts.shift : 100,
            curShift = 0,
            els = Array.from(this.container.children);

        if (opts.random) {
            let newEls = [];
            for (let j = 0, l = els.length; j < l; j++) {
                let i = Math.floor(Math.random() * els.length);
                newEls.push(els.splice(i, 1)[0]);
            }
            els = newEls;
        }
        if (opts.reverse) {
            els = els.reverse();
        }

        els.forEach(el => {
            curShift += typeof shift == 'object' ? Math.round(Math.random() * (shift.max - shift.min) + shift.min) : shift;
            el.style.animationDelay = el.querySelector('.letter-inner').style.animationDelay = '';
            if (shift === false) return;
            el.style.animationDelay = (parseFloat(getComputedStyle(el, null).animationDelay) + curShift / 1000) + 's';
            el.querySelector('.letter-inner').style.animationDelay = (parseFloat(getComputedStyle(el.querySelector('.letter-inner'), null).animationDelay) + curShift / 1000) + 's';
        });
    }


    /**
     * Distribute children's offset positions
     * We are currently doing this in Sass
     * @param  {Object} opts options
     */
    distributeOffsets(opts) {
        let coords,
            alpha = opts.minAngle || 0,
            x = 100,
            y = 100,
            els = this.container.children;

        for (let i = 0; i < els.length; i++) {
            if (opts.dx || opts.dy) {
                x -= opts.dx || 0;
                y -= opts.dy || 0;
            } else {
                if (opts.random) {
                    alpha = Math.random * (opts.maxAngle || 360 - opts.minAngle || 0) + opts.minAngle || 0;
                    coords = util.math.polarToDecart(alpha, 100);
                } else {
                    coords = util.math.polarToDecart(alpha, 100);
                    alpha += opts.dAlpha;
                }
                x = coords.x;
                y = coords.y;
            }
            els[i].style.transform = 'translate(' + x.toFixed(3) + 'vmax,' + y.toFixed(3) + 'vmax)';
        }
    }
}
/**
 * The available animation effects and their settings
 * @type {Object}
 */
Animator.effects = {
    roll: {
        delays: { shift: 100 }
    },
    slide: {
        delays: { shift: 100 }
    },
    swivel: {
        delays: { shift: 100, random: true }
    },
    peel: {
        delays: { shift: 70 }
    },
    wave: {
        delays: { shift: 30 }
    },
    wave2: {
        delays: { shift: 120 }
    },
    hop: {
        delays: { shift: 140 }
    },
    converge: {
        delays: { shift: false }
    },
    fade: {
        delays: { shift: 80, random: true }
    },
    snow: {
        delays: { shift: 600, random: true }
    },
    spiral: {
        delays: { shift: 100 }
    },
    meteorite: {
        delays: { shift: 50, random: true }
    },
    bounce: {
        delays: { shift: 200, random: true }
    },
    float: {
        delays: { shift: 400, random: true }
    },
    bubble: {
        delays: { shift: { min: 200, max: 500 }, random: true }
    },
};




document.querySelector('.anim-text').innerHTML = "Welcome to visit my website!"
const animationContainer = document.querySelector('.anim-text');

let config = localStorage['funkyLetters:config'];
try {
    config = JSON.parse(config);
} catch (e) {
    config = {
        completed: {}
    };
}

// Tips
if (config.completed.changeEffect) {
    document.querySelector('.tip-effect').classList.add('hide');
} else {
    document.querySelector('#selectEffect').addEventListener('change', () => {
        document.querySelector('.tip-effect').classList.add('hide');
        config.completed.changeEffect = true;
        localStorage['funkyLetters:config'] = JSON.stringify(config);
    }, { once: true });
}

if (config.completed.type) {
    document.querySelector('.tip-type').classList.add('hide');
} else {
    animationContainer.addEventListener('keydown', () => {
        document.querySelector('.tip-type').classList.add('hide');
        config.completed.type = true;
        localStorage['funkyLetters:config'] = JSON.stringify(config);
    }, { once: true });
}

if (config.completed.comeBack) {
    document.querySelector('.alert-come-back').classList.add('hide');
}


new FunkyLetters(animationContainer, { colorize: true });

const animator = new Animator(animationContainer);
animator.animate(document.querySelector('#selectEffect').value);
module.exports = {
  options: {
    'tagname-lowercase': true,
    'attr-lowercase': true,
    'attr-value-double-quotes': true,
    'attr-value-not-empty': false,
    'attr-no-duplication': true,
    'doctype-first': true,
    'tag-pair': true,
    'tag-self-close': false,
    'spec-char-escape': false,
    'id-unique': true,
    'src-not-empty': true,
    'title-require': true,
    'head-script-disabled': true,
    'alt-require': true,
    'doctype-html5': true,
    'id-class-value': 'dash',
    'style-disabled': false,
    'inline-style-disabled': true,
    'inline-script-disabled': true,
    'space-tab-mixed-disabled': true,
    'id-class-ad-disabled': true,
    'href-abs-or-rel': false,
    'attr-unsafe-chars': true
  },
  all: {
    src: ['build/*.html']
  }
};
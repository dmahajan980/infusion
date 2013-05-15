/*
Copyright 2013 OCAD University

Licensed under the Educational Community License (ECL), Version 2.0 or the New
BSD license. You may not use this file except in compliance with one these
Licenses.

You may obtain a copy of the ECL 2.0 License and BSD License at
https://github.com/fluid-project/infusion/raw/master/Infusion-LICENSE.txt
*/

// Declare dependencies
/*global fluid_1_5:true, jQuery*/

// JSLint options 
/*jslint white: true, funcinvoke: true, undef: true, newcap: true, nomen: true, regexp: true, bitwise: true, browser: true, forin: true, maxerr: 100, indent: 4 */

var fluid_1_5 = fluid_1_5 || {};


(function ($, fluid) {

    /*************************
     * UI Options Text Sizer *
     *************************/

    fluid.defaults("fluid.uiOptions.textfieldSlider", {
        gradeNames: ["fluid.textfieldSlider", "autoInit"],
        model: "{fluid.uiOptions.settingsPanel}.model",
        listeners: {
            modelChanged: {
                listener: "{fluid.uiOptions.settingsPanel}.applier.requestChange",
                args: ["{that}.options.path", "{arguments}.0"]
            }
        },
        path: "value",
        sliderOptions: "{fluid.uiOptions.settingsPanel}.options.sliderOptions"
    });

    /**
     * A sub-component of fluid.uiOptions that renders the "text size" panel of the user preferences interface.
     */
    fluid.defaults("fluid.uiOptions.textSizer", {
        gradeNames: ["fluid.uiOptions.settingsPanel", "autoInit"],
        // The default model values represent both the expected format as well as the setting to be applied in the absence of values passed down to the component.
        // i.e. from the settings store, or specific defaults derived from schema.
        // Note: Except for being passed down to its subcomponent, these default values are not contributed and shared out
        model: {
            value: 1,
            min: 1,
            max: 2
        },
        selectors: {
            textSize: ".flc-uiOptions-min-text-size",
            label: ".flc-uiOptions-min-text-size-label",
            smallIcon: ".flc-uiOptions-min-text-size-smallIcon",
            largeIcon: ".flc-uiOptions-min-text-size-largeIcon",
            multiplier: ".flc-uiOptions-multiplier"
        },
        strings: {
            label: "{globalBundle}.options.messageBase.textSizeLabel",
            smallIcon: "{globalBundle}.options.messageBase.textSizeSmallIcon",
            largeIcon: "{globalBundle}.options.messageBase.textSizeLargeIcon",
            multiplier: "{globalBundle}.options.messageBase.multiplier"
        },
        protoTree: {
            label: {messagekey: "label"},
            smallIcon: {messagekey: "smallIcon"},
            largeIcon: {messagekey: "largeIcon"},
            multiplier: {messagekey: "multiplier"},
            textSize: {
                decorators: {
                    type: "fluid",
                    func: "fluid.uiOptions.textfieldSlider"
                }
            }
        },
        sliderOptions: {
            orientation: "horizontal",
            step: 0.1,
            range: "min"
        }
    });
    
    /************************
     * UI Options Text Font *
     ************************/

    /**
     * A sub-component of fluid.uiOptions that renders the "text font" panel of the user preferences interface.
     */
    fluid.defaults("fluid.uiOptions.textFont", {
        gradeNames: ["fluid.uiOptions.settingsPanel", "autoInit"],
        // The default model value represents both the expected format as well as the setting to be applied in the absence of a value passed down to the component.
        // i.e. from the settings store, or specific defaults derived from schema.
        // Note: This default value is not contributed and shared out
        model: {
            value: "default"
        },
        selectors: {
            textFont: ".flc-uiOptions-text-font",
            label: ".flc-uiOptions-text-font-label"
        },
        strings: {
            textFont: "{globalBundle}.options.messageBase.textFont",
            label: "{globalBundle}.options.messageBase.textFontLabel"
        },
        produceTree: "fluid.uiOptions.textFont.produceTree",
        classnameMap: null, // must be supplied by implementors
        controlValues: { 
            textFont: ["default", "times", "comic", "arial", "verdana"]
        }
    });
    
    fluid.uiOptions.textFont.produceTree = function (that) {
        // render drop down list box
        return {
            label: that.options.strings.label,
            textFont: {
                optionnames: that.options.strings.textFont,
                optionlist: that.options.controlValues.textFont,
                selection: "${value}",
                decorators: {
                    type: "fluid",
                    func: "fluid.uiOptions.selectDecorator",
                    options: {
                        styles: that.options.classnameMap.textFont
                    }
                }
            }
        };
    };
    
    /**************************
     * UI Options Line Spacer *
     **************************/

    /**
     * A sub-component of fluid.uiOptions that renders the "line spacing" panel of the user preferences interface.
     */
    fluid.defaults("fluid.uiOptions.lineSpacer", {
        gradeNames: ["fluid.uiOptions.settingsPanel", "autoInit"],
        // The default model values represent both the expected format as well as the setting to be applied in the absence of values passed down to the component.
        // i.e. from the settings store, or specific defaults derived from schema.
        // Note: Except for being passed down to its subcomponent, these default values are not contributed and shared out
        model: {
            value: 1,
            min: 1,
            max: 2
        },
        selectors: {
            lineSpacing: ".flc-uiOptions-line-spacing",
            label: ".flc-uiOptions-line-spacing-label",
            narrowIcon: ".flc-uiOptions-line-spacing-narrowIcon",
            wideIcon: ".flc-uiOptions-line-spacing-wideIcon",
            multiplier: ".flc-uiOptions-multiplier"
        },
        strings: {
            label: "{globalBundle}.options.messageBase.lineSpacingLabel",
            narrowIcon: "{globalBundle}.options.messageBase.lineSpacingNarrowIcon",
            wideIcon: "{globalBundle}.options.messageBase.lineSpacingWideIcon",
            multiplier: "{globalBundle}.options.messageBase.multiplier"
        },
        protoTree: {
            label: {messagekey: "label"},
            narrowIcon: {messagekey: "narrowIcon"},
            wideIcon: {messagekey: "wideIcon"},
            multiplier: {messagekey: "multiplier"},
            lineSpacing: {
                decorators: {
                    type: "fluid",
                    func: "fluid.uiOptions.textfieldSlider"
                }
            }
        },
        sliderOptions: {
            orientation: "horizontal",
            step: 0.1,
            range: "min"
        }
    });
    
    /***********************
     * UI Options Contrast *
     ***********************/

    /**
     * A sub-component of fluid.uiOptions that renders the "contrast" panel of the user preferences interface.
     */
    fluid.defaults("fluid.uiOptions.contrast", {
        gradeNames: ["fluid.uiOptions.settingsPanel", "autoInit"],
        // The default model value represents both the expected format as well as the setting to be applied in the absence of a value passed down to the component.
        // i.e. from the settings store, or specific defaults derived from schema.
        // Note: This default value is not contributed and shared out
        model: {
            value: "default"
        },
        listeners: {
            afterRender: "{that}.style"
        },
        selectors: {
            themeRow: ".flc-uiOptions-themeRow",
            themeLabel: ".flc-uiOptions-theme-label",
            themeInput: ".flc-uiOptions-themeInput",
            label: ".flc-uiOptions-contrast-label"
        },
        strings: {
            theme: "{globalBundle}.options.messageBase.theme",
            label: "{globalBundle}.options.messageBase.contrastLabel"
        },
        repeatingSelectors: ["themeRow"],
        produceTree: "fluid.uiOptions.contrast.produceTree",
        controlValues: { 
            theme: ["default", "bw", "wb", "by", "yb"]
        },
        markup: {
            label: "<span class=\"fl-preview-A\">A</span><span class=\"fl-hidden-accessible\">%theme</span><div class=\"fl-crossout\"></div>"
        },
        invokers: {
            style: {
                funcName: "fluid.uiOptions.contrast.style",
                args: ["{that}.dom.themeLabel", "{that}.options.strings.theme",
                    "{that}.options.markup.label", "{that}.options.controlValues.theme",
                    "{that}.options.classnameMap.theme"]
            }
        }
    });

    fluid.uiOptions.contrast.style = function (labels, strings, markup, theme, style) {
        fluid.each(labels, function (label, index) {
            label = $(label);
            label.html(fluid.stringTemplate(markup, {
                theme: strings[index]
            }));
            label.addClass(style[theme[index]]);
        });
    };
    
    fluid.uiOptions.contrast.produceTree = function (that) {
        return {
            label: that.options.strings.label,
            expander: {
                type: "fluid.renderer.selection.inputs",
                rowID: "themeRow",
                labelID: "themeLabel",
                inputID: "themeInput",
                selectID: "theme-radio",
                tree: {
                    optionnames: that.options.strings.theme,
                    optionlist: that.options.controlValues.theme,
                    selection: "${value}"
                }
            }
        };
    };
    
    /******************************
     * UI Options Layout Controls *
     ******************************/

    /**
     * A sub-component of fluid.uiOptions that renders the "layout and navigation" panel of the user preferences interface.
     */
    fluid.defaults("fluid.uiOptions.layoutControls", {
        gradeNames: ["fluid.uiOptions.settingsPanel", "autoInit"],
        // The default model value represents both the expected format as well as the setting to be applied in the absence of a value passed down to the component.
        // i.e. from the settings store, or specific defaults derived from schema.
        // Note: This default value is not contributed and shared out
        model: {
            toc: false
        },
        selectors: {
            toc: ".flc-uiOptions-toc",
            label: ".flc-uiOptions-toc-label",
            choiceLabel: ".flc-uiOptions-toc-choice-label"
        },
        strings: {
            label: "{globalBundle}.options.messageBase.tocLabel",
            choiceLabel: "{globalBundle}.options.messageBase.tocChoiceLabel"
        },
        protoTree: {
            label: {messagekey: "label"},
            choiceLabel: {messagekey: "choiceLabel"},
            toc: "${toc}"
        }
    });

    /*****************************
     * UI Options Links Controls *
     *****************************/
    /**
     * A sub-component of fluid.uiOptions that renders the "links and buttons" panel of the user preferences interface.
     */
    fluid.defaults("fluid.uiOptions.linksControls", {
        gradeNames: ["fluid.uiOptions.settingsPanel", "autoInit"],
        // The default model values represent both the expected format as well as the setting to be applied in the absence of values passed down to the component.
        // i.e. from the settings store, or specific defaults derived from schema.
        // Note: These default values are not contributed and shared out
        model: {
            links: false,
            inputsLarger: false
        },
        selectors: {
            links: ".flc-uiOptions-links",
            inputsLarger: ".flc-uiOptions-inputs-larger",
            label: ".flc-uiOptions-links-label",
            linksChoiceLabel: ".flc-uiOptions-links-choice-label",
            inputsChoiceLabel: ".flc-uiOptions-links-inputs-choice-label"
        },
        strings: {
            label: "{globalBundle}.options.messageBase.linksLabel",
            linksChoiceLabel: "{globalBundle}.options.messageBase.linksChoiceLabel",
            inputsChoiceLabel: "{globalBundle}.options.messageBase.inputsChoiceLabel"
        },
        protoTree: {
            label: {messagekey: "label"},
            linksChoiceLabel: {messagekey: "linksChoiceLabel"},
            inputsChoiceLabel: {messagekey: "inputsChoiceLabel"},
            links: "${links}",
            inputsLarger: "${inputsLarger}"
        }
    });

    /************************************************
     * UI Options Select Dropdown Options Decorator *
     ************************************************/

    /**
     * A sub-component that decorates the options on the select dropdown list box with the css style
     */
    fluid.defaults("fluid.uiOptions.selectDecorator", {
        gradeNames: ["fluid.viewComponent", "autoInit"], 
        listeners: {
            onCreate: "fluid.uiOptions.selectDecorator.decorateOptions"
        },
        styles: {
            preview: "fl-preview-theme"
        }
    });
    
    fluid.uiOptions.selectDecorator.decorateOptions = function (that) {
        fluid.each($("option", that.container), function (option) {
            var styles = that.options.styles;
            $(option).addClass(styles.preview + " " + styles[fluid.value(option)]);
        });
    };

    /************************************************************************
     * The grade that contains shared options by all default settings panels
     ************************************************************************/
    
    fluid.defaults("fluid.uiOptions.defaultSettingsPanel", {
        gradeNames: ["fluid.eventedComponent", "autoInit"],
        mergePolicy: {
            sourceApplier: "nomerge"
        },
        sourceApplier: "{fluid.uiOptions}.applier",
        listeners: {
            "{uiOptions}.events.onUIOptionsRefresh": "{fluid.uiOptions.settingsPanel}.refreshView"
        }
    });

    /*********************************************************************************************************
     * defaultSettingsPanels
     * 
     * A collection of all the default UIO setting panels.
     *********************************************************************************************************/
    fluid.defaults("fluid.uiOptions.defaultSettingsPanels", {
        gradeNames: ["fluid.uiOptions", "autoInit"],
        selectors: {
            textSizer: ".flc-uiOptions-text-sizer",
            textFont: ".flc-uiOptions-text-font",
            lineSpacer: ".flc-uiOptions-line-spacer",
            contrast: ".flc-uiOptions-contrast",
            textControls: ".flc-uiOptions-text-controls",
            layoutControls: ".flc-uiOptions-layout-controls",
            linksControls: ".flc-uiOptions-links-controls"
        },
        components: {
            textSizer: {
                type: "fluid.uiOptions.textSizer",
                container: "{uiOptions}.dom.textSizer",
                createOnEvent: "onUIOptionsMarkupReady",
                options: {
                    gradeNames: "fluid.uiOptions.defaultSettingsPanel",
                    rules: {
                        "selections.textSize": "value"
                    },
                    resources: {
                        template: "{templateLoader}.resources.textSizer"
                    }
                }
            },
            lineSpacer: {
                type: "fluid.uiOptions.lineSpacer",
                container: "{uiOptions}.dom.lineSpacer",
                createOnEvent: "onUIOptionsMarkupReady",
                options: {
                    gradeNames: "fluid.uiOptions.defaultSettingsPanel",
                    rules: {
                        "selections.lineSpacing": "value"
                    },
                    resources: {
                        template: "{templateLoader}.resources.lineSpacer"
                    }
                }
            },
            textFont: {
                type: "fluid.uiOptions.textFont",
                container: "{uiOptions}.dom.textFont",
                createOnEvent: "onUIOptionsMarkupReady",
                options: {
                    gradeNames: "fluid.uiOptions.defaultSettingsPanel",
                    classnameMap: "{uiEnhancer}.options.classnameMap",
                    rules: {
                        "selections.textFont": "value"
                    },
                    resources: {
                        template: "{templateLoader}.resources.textFont"
                    }
                }
            },
            contrast: {
                type: "fluid.uiOptions.contrast",
                container: "{uiOptions}.dom.contrast",
                createOnEvent: "onUIOptionsMarkupReady",
                options: {
                    gradeNames: "fluid.uiOptions.defaultSettingsPanel",
                    classnameMap: "{uiEnhancer}.options.classnameMap",
                    rules: {
                        "selections.theme": "value"
                    },
                    resources: {
                        template: "{templateLoader}.resources.contrast"
                    }
                }
            },
            layoutControls: {
                type: "fluid.uiOptions.layoutControls",
                container: "{uiOptions}.dom.layoutControls",
                createOnEvent: "onUIOptionsMarkupReady",
                options: {
                    gradeNames: "fluid.uiOptions.defaultSettingsPanel",
                    rules: {
                        "selections.toc": "toc",
                        "selections.layout": "layout"
                    },
                    resources: {
                        template: "{templateLoader}.resources.layoutControls"
                    }
                }
            },
            linksControls: {
                type: "fluid.uiOptions.linksControls",
                container: "{uiOptions}.dom.linksControls",
                createOnEvent: "onUIOptionsMarkupReady",
                options: {
                    gradeNames: "fluid.uiOptions.defaultSettingsPanel",
                    rules: {
                        "selections.links": "links",
                        "selections.inputsLarger": "inputsLarger"
                    },
                    resources: {
                        template: "{templateLoader}.resources.linksControls"
                    }
                }
            }
        }
    });

    /******************************
     * Default Template Loader
     ******************************/

    /**
     * A template loader component that specifies the templates used by defaultSettingsPanels
     * 
     * @param {Object} options
     */    
       
    fluid.defaults("fluid.uiOptions.defaultTemplateLoader", {
        gradeNames: ["fluid.uiOptions.templateLoader", "autoInit"],
        templates: {
            textSizer: "%prefix/UIOptionsTemplate-textSizer.html",
            textFont: "%prefix/UIOptionsTemplate-textFont.html",
            lineSpacer: "%prefix/UIOptionsTemplate-lineSpacer.html",
            contrast: "%prefix/UIOptionsTemplate-contrast.html",
            layoutControls: "%prefix/UIOptionsTemplate-layout.html",
            linksControls: "%prefix/UIOptionsTemplate-links.html"
        }
    });

})(jQuery, fluid_1_5);

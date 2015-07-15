// events:
// reload: 点击重新加载按钮

var Backbone = require("modules-common/backbone/backbone.js");
var $ = require("modules-common/zepto/zepto.js");

var View = Backbone.View.extend({
	tagName: "div",
	attributes: {
		class: "load-error"
	},
	initialize: function() {
		this.render();

		this.$button = this.$el.find(".JS-reload");

		this.initEvent();
	},
	render: function() {
		this.$el.append(__inline("load-error.html"));
	},

	initEvent: function() {
		var that = this;
		this.$button.on("click", function() {
			that.trigger("reload");
		});
	},

	show: function() {
		this.$el.show();
	},

	hide: function() {
		this.$el.hide();
	}
});

module.exports = new View();

class TabLink {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.item = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
    this.tabItem = new TabItem(this.item);
    
    this.element.addEventListener('click', () => {
      this.select();

    });
  };

  select() {
    const links = document.querySelectorAll('.tabs-link');
    links.forEach( link => {
      link.classList.remove('tabs-link-selected')
    });
    this.element.classList.add('tabs-link-selected');
    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    const items = document.querySelectorAll('.tabs-item');
    console.log(items);
    items.forEach( item => {
      item.classList.remove('tabs-item-selected');
    })
    this.element.classList.add('tabs-item-selected');
    console.log(this.element);
  }
}

let links = document.querySelectorAll('.tab-section .tabs .tabs-links .tabs-link').forEach( link => new TabLink(link));


/////////TEST////////
// (function() {
//   $(function() {
//     var toggle;
//     return toggle = new Toggle('.toggle');
//   });

//   this.Toggle = (function() {
//     Toggle.prototype.el = null;

//     Toggle.prototype.tabs = null;

//     Toggle.prototype.panels = null;

//     function Toggle(toggleClass) {
//       this.el = $(toggleClass);
//       this.tabs = this.el.find(".tab");
//       this.panels = this.el.find(".panel");
//       this.bind();
//     }

//     Toggle.prototype.show = function(index) {
//       var activePanel, activeTab;
//       this.tabs.removeClass('active');
//       activeTab = this.tabs.get(index);
//       $(activeTab).addClass('active');
//       this.panels.hide();
//       activePanel = this.panels.get(index);
//       return $(activePanel).show();
//     };

//     Toggle.prototype.bind = function() {
//       var _this = this;
//       return this.tabs.unbind('click').bind('click', function(e) {
//         return _this.show($(e.currentTarget).index());
//       });
//     };

//     return Toggle;

//   })();

// }).call(this);

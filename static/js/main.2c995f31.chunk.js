(this.webpackJsonpreactrestaurant=this.webpackJsonpreactrestaurant||[]).push([[0],{103:function(e,a,t){},104:function(e,a,t){},260:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(28),c=t.n(l),m=(t(103),t(104),t(105),t(106),t(7)),o=t(8),s=t(10),i=t(9),d=t(29),u=t(11),p=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(s.a)(this,Object(i.a)(a).call(this,e))).showModal=function(){t.setState({show:!0})},t.hideModal=function(){t.setState({show:!1})},t.state={show:!1},t.showModal=t.showModal.bind(Object(d.a)(t)),t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h1",{className:"display-2",id:"Title"},"TOMORROW'S"),r.a.createElement("h3",{className:"lead"},"WHERE TODAY'S FOOD CHANGES TOMORROW!"),r.a.createElement("hr",{className:"my-4"}),r.a.createElement("p",null,'"BEST BURNT MUFFIN BOTTOMS THIS SIDE OF THE MISSISSIPPI" - RANDOM DINER'),r.a.createElement("p",{className:"lead"},r.a.createElement("a",{className:"btn btn-primary btn-lg",onClick:this.showModal,role:"button"},"TIMES AND LOCATION"))),r.a.createElement(h,{show:this.state.show,hideModal:this.hideModal}))}}]),a}(r.a.Component),h=function(e){var a=e.hideModal,t=e.show?"modal d-block":"modal d-none";return r.a.createElement("div",{className:"modal".concat(t),id:"showModal",tabIndex:"-1",role:"dialog"},r.a.createElement("div",{className:"modal-dialog",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title"},r.a.createElement("a",{href:"https://www.google.com/maps/place/Awesome+Inc/@38.0420621,-84.4948785,17z/data=!3m1!4b1!4m5!3m4!1s0x884244e842d5acf7:0x92c7783d2b2a2d15!8m2!3d38.0420621!4d-84.4926845"},"Tomorrow's 348 East Main Street")),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body"},r.a.createElement("h5",null,"Sunday: 10am - 1am "),r.a.createElement("h5",null,"Monday: 10am - 1am "),r.a.createElement("h5",null,"Tuesday: 10am - 1am "),r.a.createElement("h5",null,"Wednesday: 10am - 1am "),r.a.createElement("h5",null,"Thursday: 10am - 1am "),r.a.createElement("h5",null,"Friday: 10am - 2am "),r.a.createElement("h5",null,"Saturday: 10am - 2am ")),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return a()},"data-dismiss":"modal"},"Close")))))},E=p,b=t(97),f=t.n(b),v=(t(57),t(96),r.a.Component,function(e){function a(e){return Object(m.a)(this,a),Object(s.a)(this,Object(i.a)(a).call(this,e))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"container-fluid",style:{display:"inline-block",margin:0},className:"menu-item-container-fluid"},r.a.createElement("h4",null,"Tomorrow's ",this.props.title),r.a.createElement("h2",null,this.props.price),r.a.createElement("h5",null,this.props.description))}}]),a}(r.a.Component)),g=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(s.a)(this,Object(i.a)(a).call(this,e))).state={menu_items:[]},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"random_item",value:function(e){return e[Math.floor(Math.random()*e.length)]}},{key:"getMenuItems",value:function(e,a){var t=this,n=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8updated.jpg","9.jpg","10.jpg","11.jpg","12.jpg"];f.a.get("https://entree-f18.herokuapp.com/v1/menu/".concat(a)).then((function(e){var a=e.data.menu_items;a.map((function(e,a){e.image=t.random_item(n),n.splice(n.indexOf(e.image),1),e.price="$"+e.description.length,e.title=e.description.split(" ")[1].toUpperCase()})),localStorage.setItem(t.props.menuType,JSON.stringify(a)),t.setState({menu_items:a})}))}},{key:"componentDidMount",value:function(){localStorage.getItem("menu_items")?this.setState({}):this.getMenuItems(this.props.menuType,this.props.numberOfItems)}},{key:"render",value:function(){return this.state.menu_items.map((function(e,a){var t="/images/".concat(e.image);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{key:a,className:"carousel-item ".concat(0===a&&"active")},r.a.createElement("img",{className:"d-block w-100",id:"foodImage",src:t,alt:"Food"}),r.a.createElement("div",{className:"carousel-caption d-md-block",id:"Priceview"},r.a.createElement(v,{price:e.price,title:e.title,description:e.description}))))}))}}]),a}(r.a.Component);var y=function(e){var a="carouselExampleIndicators".concat(e.menuType),t="#".concat(a);return r.a.createElement("div",{key:a,id:a,className:"carousel slide","data-ride":"carousel"},r.a.createElement("ol",{className:"carousel-indicators"}),r.a.createElement("div",{className:"carousel-inner"},r.a.createElement(g,{menuType:e.menuType,numberOfItems:e.numberOfItems})),r.a.createElement("a",{className:"carousel-control-prev",href:t,role:"button","data-slide":"prev"},r.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Previous")),r.a.createElement("a",{className:"carousel-control-next",href:t,role:"button","data-slide":"next"},r.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Next")))};var N=function(){var e=[{menuType:"Appetizers",numberOfItems:8},{menuType:"Lunch",numberOfItems:5},{menuType:"Brunch",numberOfItems:8},{menuType:"Dinner",numberOfItems:12},{menuType:"Late-Night",numberOfItems:7}].map((function(e,a){var t="collapse".concat(a),n="#".concat(t);return r.a.createElement("div",{key:a,className:"card"},r.a.createElement("div",{className:"card-header",id:"=HeadingONE"},r.a.createElement("div",{key:a,className:"card-header"},r.a.createElement("h5",{className:"mb-0"},r.a.createElement("button",{className:"btn btn-link","data-toggle":"collapse","data-target":n,"aria-expanded":"true","aria-controls":t},e.menuType)))),r.a.createElement("div",{id:t,className:"collapse","aria-labelledby":"headingOne","data-parent":"#accordion"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",null,r.a.createElement(y,{menuType:e.menuType,numberOfItems:e.numberOfItems})))))}));return r.a.createElement("div",{id:"accordion"},e)};var O=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,null),r.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},98:function(e,a,t){e.exports=t(260)}},[[98,1,2]]]);
//# sourceMappingURL=main.2c995f31.chunk.js.map
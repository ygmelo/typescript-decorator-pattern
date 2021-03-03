var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ListItens = /** @class */ (function () {
    function ListItens() {
    }
    ListItens.getToys = function () {
        return [
            new Toy(5.50, "Power Ranger", "red"),
            new Toy(5.50, "Power Ranger", "blak"),
            new Toy(5.50, "Power Ranger", "white"),
            new Toy(5.50, "Power Ranger", "yellow"),
            new Toy(5.50, "Power Ranger", "pink"),
        ];
    };
    return ListItens;
}());
var Toy = /** @class */ (function () {
    function Toy(price, name, color) {
        this.price = price;
        this.name = name;
        this.color = color;
    }
    return Toy;
}());
var SectionItem = /** @class */ (function () {
    function SectionItem(name, listItens) {
        this.name = name;
        this.listItens = listItens;
    }
    ;
    SectionItem.prototype.countItens = function () {
        return this.listItens.length;
    };
    SectionItem.prototype.getItens = function () {
        return this.listItens;
    };
    SectionItem.prototype.getDescription = function () {
        return this.name;
    };
    return SectionItem;
}());
var ToySection = /** @class */ (function (_super) {
    __extends(ToySection, _super);
    function ToySection(name, listItens) {
        return _super.call(this, name, listItens) || this;
    }
    ;
    return ToySection;
}(SectionItem));
/* Decorator Interface Definition */
var SectionDecorator = /** @class */ (function () {
    function SectionDecorator(name, listItens, sectionItem) {
        this.name = name;
        this.listItens = listItens;
        this.sectionItem = sectionItem;
    }
    ;
    return SectionDecorator;
}());
/* Decorator Concrete Class - E-commerce WebSite Class */
var SectionOnline = /** @class */ (function (_super) {
    __extends(SectionOnline, _super);
    function SectionOnline(sectionItem) {
        return _super.call(this, sectionItem.name, sectionItem.listItens, sectionItem) || this;
    }
    SectionOnline.prototype.getDescription = function () {
        return this.sectionItem.countItens() + " in the WebSite E-Commerce!";
    };
    return SectionOnline;
}(SectionDecorator));
/* Decorator Concrete Class - Store Physical Class */
var SectionStore = /** @class */ (function (_super) {
    __extends(SectionStore, _super);
    function SectionStore(sectionItem) {
        return _super.call(this, sectionItem.name, sectionItem.listItens, sectionItem) || this;
    }
    SectionStore.prototype.getDescription = function () {
        return this.sectionItem.countItens() + " in the Store!";
    };
    return SectionStore;
}(SectionDecorator));
var rangerSection = new ToySection("Power Ranger Section", ListItens.getToys());
var rangerOnline = new SectionOnline(rangerSection);
var rangerStore = new SectionStore(rangerSection);
console.log(rangerSection.listItens, rangerOnline.getDescription(), rangerStore.getDescription());

class ListItens {
	static getToys(): Array<Toy> {
		return [
			new Toy(5.50, "Power Ranger", "red"), /* The best xD */ 
			new Toy(5.50, "Power Ranger", "blak"),
			new Toy(5.50, "Power Ranger", "white"),
			new Toy(5.50, "Power Ranger", "yellow"),
			new Toy(5.50, "Power Ranger", "pink"),
		] 
	}
}

interface Item {
	price: number;
	name : string;
}

class Toy implements Item {
	constructor(
		public price: number, 
		public name : string, 
		public color: string
	){}
}

/* My target for Decoration! */ 
interface Section {
	name: string, 
  listItens: Array<Item>
}

abstract class SectionItem implements Section {
	constructor(public name: string, public listItens: Array<Item>){};

	countItens(): number {
		return this.listItens.length;
	} 
	getItens(): Array<Item> {
		return this.listItens;
	}
	getDescription(): string {
		return this.name
	}
}

class ToySection extends SectionItem {
	constructor(name: string, listItens: Array<Item>){
		super(name, listItens)
	};
}

/* Decorator Interface Definition */ 
class SectionDecorator implements Section {
	constructor(
		public name: string, 
		public listItens: Array<Item>, 
		public sectionItem: SectionItem){};
}

/* Decorator Concrete Class - E-commerce WebSite Class */ 
class SectionOnline extends SectionDecorator {
	constructor(sectionItem: SectionItem){
		super(sectionItem.name, sectionItem.listItens, sectionItem)
	}
	getDescription(): string {
		return `${this.sectionItem.countItens()} in the WebSite E-Commerce!`;
	}

	/* More Especific Methods...*/ 
}

/* Decorator Concrete Class - Store Physical Class */ 
class SectionStore extends SectionDecorator {
	constructor(sectionItem: SectionItem){
		super(sectionItem.name, sectionItem.listItens, sectionItem)
	}
	getDescription(): string {
		return `${this.sectionItem.countItens()} in the Store!`;
	}

	/* More Especific Methods... */ 
}

const rangerSection: ToySection    = new ToySection("Power Ranger Section", ListItens.getToys()); 
const rangerOnline : SectionOnline = new SectionOnline(rangerSection);
const rangerStore  : SectionStore  = new SectionStore(rangerSection);

console.log(rangerSection.listItens, 
	          rangerOnline.getDescription(), 
					  rangerStore.getDescription());
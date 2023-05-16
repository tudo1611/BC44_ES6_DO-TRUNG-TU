

export class Food {
    constructor (
        id,
        name,
        type,
        price,
        discount,
        status,
        img,
        desc,
    ) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.price = price;
        this.discount = discount;
        this.status = status;
        this.img = img;
        this.desc = desc;
    }
    tinhGiaKM() {
        return this.price * (1 - this.discount/100);
    }
}
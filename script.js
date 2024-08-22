{
    class Button{
        button

        constructor(content){
            this.button =document.createElement('button')
            this.button.innerHTML=content
            document.body.appendChild(this.button)
        }
        
        set width(width){
            this.button.style.width=width+"px"
        }

        set height(height){
            this.button.style.height=height+"px"
        }

        get width(){
            return this.button.style.width
         }

         get height(){
            return this.button.style.height
         }

         onclick(fn){
            this.button.onclick=fn
         }
    }

    class orangebtn extends Button{

        set color(color){
            this.button.style.background=color
        }

        onclick(fn){
            this.button.onclick=function(){
                this.button.style.background ="orange"
                fn()

            }.bind(this)
        }

    }

    let btn=new Button('click here')
    console.log("btn : ",btn)

    btn.width=200
    btn.height=100

    console.log("width : ",btn.width)
    console.log("height : ",btn.height)

    btn.onclick(function(){
        console.log("btn clicked")
    })

    let orangebtn1 = new orangebtn('click me')

    orangebtn1.onclick(function(){
        console.log("Orange button clicked.......")
    })

    orangebtn1.color="yellow"

}

console.log("\n\n\n\n")


console.log("\n\n\n\n")
{

class Paragraph {
    para;

    constructor(content) {
        this.para = document.createElement('p');
        this.para.textContent = content;
        document.body.appendChild(this.para);
    }

    set margin(margin) {
        this.para.style.margin = margin + "px";
    }

    set padding(padding) {
        this.para.style.padding = padding + "px";
    }

    set lineHeight(lineHeight) {
        this.para.style.lineHeight = lineHeight + "px";
    }

    get margin() {
        return this.para.style.margin;
    }

    get padding() {
        return this.para.style.padding;
    }

    get lineHeight() {
        return this.para.style.lineHeight;
    }

    mouseover(fn) {
        this.para.onmouseover = fn;
    }

    mouseout(fn) {
        this.para.onmouseout = fn;
    }
}

class p extends Paragraph {
    set bgcolor(bgcolor) {
        this.para.style.background = bgcolor;
    }

    get bgcolor() {
        return this.para.style.background;
    }

    hover() {
        this.mouseover(() => {
            this.para.style.background = "green";
        });
        this.mouseout(() => {
            this.para.style.background = "red";
        });
    }
}

let p1 = new p('Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati excepturi enim sunt est animi necessitatibus reprehenderit voluptas adipisci nisi laudantium.');

console.log("p1: ", p1);

p1.margin = 40;
console.log("Margin: ", p1.margin);

p1.padding = 30;
console.log("Padding: ", p1.padding);

p1.bgcolor = "red";
console.log("Background color: ", p1.bgcolor);

p1.lineHeight = 50;
console.log("Line height: ", p1.lineHeight);

// p1.mouseover(function () {
//     console.log("Mouseover");

// });
p1.hover();
}

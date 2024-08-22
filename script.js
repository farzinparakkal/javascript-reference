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
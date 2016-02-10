- [Sprite](#sprite)
- [Varible Created](#variblecreated)
- [Applying](#aplying)

## example using sprite  

   After generate your sprite unsing grunt sprite
   you can take the varibles and insert in the css class
   and you will get the image :)  easy.


##	Variable Created 

	in that case we are using the varible $left line 35 at this time
 	from the generated file _sprite.scss


after run grunt sprite we gonna generate one file in:

sass/helpers/sprite.scss


## Aplying the varible in a sass or css file.


example:

```css
.left-image-sprite {
  @include sprite($left);
}
```


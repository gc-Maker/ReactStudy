# React事件与原生事件
  - root原生捕获
  - 父元素React捕获
  - 子元素React捕获
  - 父元素原生捕获
  - 子元素原生捕获
  - 子元素原生冒泡
  - 父元素原生冒泡
  - root原生冒泡
  - 子元素React冒泡
  - 父元素React冒泡
 
 react16及之前的版本将React的事件绑定在document上，并且React事件的绑定是在document的冒泡前绑定的，所以在16版本的事件中先执行了document的捕获，然后执行原生事件的捕获和冒泡，再执行React的捕获和冒泡，最后执行document的冒泡。而react17将React事件绑定在rootNode上，并且捕获事件在rootNode捕获阶段绑定，冒泡事件在rootNode冒泡阶段绑定，由以上输出可以看出React捕获和冒泡事件都在rootNode的捕获和事件注册之后注册。

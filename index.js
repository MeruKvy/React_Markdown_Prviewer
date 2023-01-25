import * as bootstrap from "https://cdn.skypack.dev/bootstrap@5.2.3";

const defaultinput = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also link to my  [github profile](https://github.com/MeruKvy), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https:/\/goo.gl/Umyytc)`;

class App extends React.Component{
  
  
  
  
  state = {
    text: defaultinput
  }
  
  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  } 

  
 render () {
     
   const { text }  = this.state;
   const markdown = marked.parse(text, {breaks:true})
   
 
  
 
   return (
    
     <div><h1 className="text-center mt-5 heading">Please, don't be shy to play around~</h1>
       <div className="row"> 
         <div className="col-6">
           
          <textarea id="editor" className="form-control"value={text} onChange={this.handleChange} placeHolder="Enter your markdown here:"/>
         </div>
        
         <div id="preview" className="col-6" dangerouslySetInnerHTML= {{ __html: markdown}}>
           
         </div>
         
       
       </div>
       
       
     </div>
   )
 }
  
}

ReactDOM.render(<App/>, document.getElementById('app'))



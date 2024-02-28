const Button = (props) => {
  const{className,buttonText}=props;
  return <button className={`${className}`}>{buttonText}</button>
  
}

const element = (
   <div class="container">
      <h1 class="head">Social Buttons</h1>
        <div class="card">
          <Button buttonText="Like" className="like"/>
          <Button buttonText="Comment" className="comment"/>
          <Button buttonText="Share" className="share"/>
        </div>
   </div>
)

ReactDOM.render(element, document.getElementById('root'))

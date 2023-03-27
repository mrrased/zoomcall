

const Button = forwardRef(({ action = { callback: () => {} } }, ref) => {
    return (<button ref={ref} onClick={action.callback}  type="button">{action.icon || action.title}</button>)
  });
  
  Button.propTypes = {
    action: Action.isRequired
  }
  
  Button.displayName = 'Button'
  
  export default Button
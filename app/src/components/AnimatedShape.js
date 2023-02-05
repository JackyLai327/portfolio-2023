function AnimatedShape(props) {
    return (
        <div className={props.shape} style={{width: props.size, height:props.size, top: props.top, left: props.left}}></div>
    )
}

export default AnimatedShape;
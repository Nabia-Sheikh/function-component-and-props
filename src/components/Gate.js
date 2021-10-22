const Gate = (prop) => {
    const {isOpen} = prop ;
    return (
        <>
            {isOpen ? "Open" : "Close"} 
        </>
    )
}

export default Gate


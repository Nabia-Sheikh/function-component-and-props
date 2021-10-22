const  MediaCard = (prop) => {
    const {title,body,pic} = prop ;
        return( 
        <>
            <h2>{title}</h2>
            <p>{body}</p>
            <img src={pic} width="100px" height="100px" />
        </>
        )
    }

export default  MediaCard; 
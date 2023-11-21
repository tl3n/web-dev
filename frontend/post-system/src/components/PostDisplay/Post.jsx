import Card from 'react-bootstrap/Card'
import Ratio from 'react-bootstrap/Ratio'
import "bootstrap/dist/css/bootstrap.min.css"

const Post = () => {
    return (
        <Card className='bg-dark text-white h-100'>
            <Ratio>
                <Card.Img src='https://picsum.photos/1920/1080' style={{ objectFit: 'cover' }}/>
            </Ratio>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the alpha value for darkness
                }}
            />
            <Card.ImgOverlay>
                <Card.Title as='h3' >хто це читає, знай: я хочу спати</Card.Title>
          </Card.ImgOverlay>
        </Card>
    )
}

export default Post
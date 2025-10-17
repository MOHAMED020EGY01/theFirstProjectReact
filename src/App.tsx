import Alert from './components/Alert/index';
import './App.scss';
import { BellRing,MessageCircleOff,CircleCheckBig,CircleX    } from 'lucide-react';

function App() {


  return (
    <>
      <Alert
        title='title'
        message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laudantium sunt soluta doloribus architecto eveniet, ipsam aliquam minus, aspernatur nihil consequuntur veritatis, accusamus doloremque natus tempore facilis perspiciatis similique illo.'
        type='success'
        iconSvg={<CircleCheckBig  className='iconSvg' />}
      />
  
      
      <Alert
        title='title'
        message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laudantium sunt soluta doloribus architecto eveniet, ipsam aliquam minus, aspernatur nihil consequuntur veritatis, accusamus doloremque natus tempore facilis perspiciatis similique illo.'
        type='error'
        iconSvg={<CircleX  className='iconSvg' />}
      />      
      
      <Alert
        title='title'
        message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laudantium sunt soluta doloribus architecto eveniet, ipsam aliquam minus, aspernatur nihil consequuntur veritatis, accusamus doloremque natus tempore facilis perspiciatis similique illo.'
        type='info'
        iconSvg={<BellRing className='iconSvg' />}
      />      
      
      <Alert
        title='title'
        message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laudantium sunt soluta doloribus architecto eveniet, ipsam aliquam minus, aspernatur nihil consequuntur veritatis, accusamus doloremque natus tempore facilis perspiciatis similique illo.'
        type='warning'
        iconSvg={<MessageCircleOff  className='iconSvg' />}
      />
    </>
  )
}

export default App

import type { FC} from 'react';
import './index.scss';
import {X } from 'lucide-react';
import type { AlertProps } from '../../interface/alertInterface';

const Alert:FC<AlertProps> = ({title, message, type, iconSvg}) => {
  return (
    <>
      <div className={`alert-${type}`}>
        <div className='alert-header'>
          <div className='alert-title'>
            {iconSvg}
            <h3>{title}</h3>
          </div>
          <span className='alert-close'>
            <X />
          </span>
        </div>

        <p>{message}</p>
      </div>

    </>
  )
}

export default Alert

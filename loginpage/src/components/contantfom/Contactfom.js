import React from 'react'
import style from './Contactfom.module.css'
import Button from '../button/Button'
import { MdMessage} from "react-icons/md"
import { IoIosCall } from "react-icons/io"
import { IoMailUnreadSharp } from "react-icons/io5"

function Contactfom() {
  return (
    <section className={style.container}>
        <div className={style.contact_form}>
          <div className={style.top_btn}>
            <Button text="VIA SUPPORT CHAT" icon={<MdMessage  fontSize="24px"/>}/>
            <Button text="VIA CALL" icon={<IoIosCall/>}/>
          </div>
           <Button
           isOutline={true}
           text="VIA EMAIL FORM" icon={<IoMailUnreadSharp  fontSize="24px"/>}/>
         <form>
            <div className={style.form_control}>
              <label htmlFor="name">Name</label>
              <input type="text" name='name'/>
            </div>
            <div className={style.form_control}>
              <label htmlFor="Email">Email</label>
              <input type="text" name='Email'/>
            </div>
            <div className={style.form_control}>
              <label htmlFor="text">Text</label>
             <textarea name="text"></textarea>
            </div>
            <div
            style={
              {
                display: 'flex',
                justifyContent: 'end',
              }} >
                   <Button text="SUBMIT" />
            </div>
         </form>
           
        </div>
        <div className={style.contact_img}>
          <img src="contact (1).svg" alt="fdf" srcset="" />
        </div>
    </section>
  )
}

export default Contactfom

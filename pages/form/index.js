import {useRef} from 'react'
import { useForm } from "react-hook-form";
import styles from '../form/styles.module.css'
import ReCAPTCHA from 'react-google-recaptcha'

export default function Form() {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const reRef = useRef()
  const onSubmit = data => {
    console.log("data submit :", data)
  }
  const verifyCallback = (data) => {
    console.log('data captcha :', data);
  }
  return (
    <div className={styles.bl_form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name:</label>
          <input {...register("firstName", { required: true, maxLength: 20 })}/>
          {errors.firstName?.type === 'required' && "Dm sao deo nhap ten"}
        </div>
        <div>   
          <label>Last Name:</label>
          <input {...register("lastName", { required: true, pattern: /^[A-Za-z]+$/i })} />
          {errors.lastName?.type === 'required' && "Dm may dui a"}
        </div>
        <div>
        <label>Số tuổi:</label>
        <input type="number" {...register("age", { min: 18, max: 99 })} />
        </div>
        <hr />
        <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} ref={reRef} size="normal" onChange={verifyCallback}/>
        <hr />
        <input type="submit" className={styles.btn_submit}/>
      </form>
    </div>
  )
}

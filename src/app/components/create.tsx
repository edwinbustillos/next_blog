'use client'
import React, { useEffect, useState } from 'react'
import axiosClient from '../../utils/axiosCliente'
import '../globals.css'
export default function CreatePost() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [errors, setErrors] = useState<any>({})
  const [isFormValid, setIsFormValid] = useState(false)

  useEffect(() => {
    validateForm();
  }, [title, description]);

  const validateForm = () => {
    let errors: { title?: string, description?: string } = {};

    if (!title) {
      errors.title = '* Necessário.';
    }

    if (!description) {
      errors.description = '* Necessário.';
    } else if (description.length < 10) {
      errors.description = 'Escreva algo maior que 10 caracteres...';
    }

    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const handleSubmit = async (event: any) => {
    if (isFormValid) {
      event.preventDefault()

      const data = {
        title: title,
        description: description,
      }

      try {
        const response = await axiosClient.post('/posts', data, {
          headers: {
            'Prefer': 'return=minimal',
          },
        })

        console.log(response.data)
        window.location.href = '/'
      } catch (error) {
        console.error(error)
      }
      console.log('Formulário válido com sucesso !');
    } else {
      console.log('Formulário contém erros.');
    }

  }

  const handleCancel = (event: any) => {
    event.preventDefault()
    window.location.href = '/'
  }
  const handleTextarea = (event:any) => {
    setDescription(event.target.value);
};
  return (
    <div className='posts'>
      <div className='card'>

        <div className='title'>Criar novo Post</div>
        <div className='post'>
          <form onSubmit={handleSubmit}>
            <label>
              Título:
              <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
              {errors.title && <p className="error">{errors.title}</p>}
            </label>
            <label>
              Descrição:
              <textarea rows={5} value={description} onChange={handleTextarea} >
                
              </textarea>
              {errors.description && <p className='error' >{errors.description}</p>}
            </label>
            <button onClick={handleCancel} className='button_cancel' type="button">Cancelar</button>
            <button className='button_send' disabled={!isFormValid} type="submit">Criar novo post</button>
          </form>
        </div>
      </div>
    </div>
  )
}
import React from 'react'
import BannerEmpresa from '../components/BannerEmpresa'
import NavEmpresa from '../components/NavEmpresa'
import { ContPagesEmpresa } from '../styles/NavEmpresa'

const CLientes = () => {
  return (
    <div>
      <BannerEmpresa/>
      <ContPagesEmpresa>
        <NavEmpresa />
        Nuestra Experiencia
      </ContPagesEmpresa>
    </div>
  )
}

export default CLientes
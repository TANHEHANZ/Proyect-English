import React from 'react'
import CustomSintaxis from '../../../../components/customSintaxis'
import { dataFuncionSinRetorno } from './dataFunctionenyValue'

const EnyValue = () => {
  return (
    <div>
      <CustomSintaxis title={"Functions without returning values"} data={dataFuncionSinRetorno} />


    </div>
  )
}

export default EnyValue
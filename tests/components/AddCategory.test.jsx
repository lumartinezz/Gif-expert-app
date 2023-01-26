import { AddCategory } from '../../src/components/AddCategory'
import {render, screen, fireEvent} from '@testing-library/react'

describe('Pruebas en <AddCategory/>', () => {
    
    test('debe de cambiar el valor de la caja de texto', () => {

render(<AddCategory  onNewCategory={() => {}}/>)
const input = screen.getByRole('textbox')


fireEvent.input(input, {target : {value: 'Saitama'}})
expect(input.value).toBe('Saitama')

//screen.debug()

    })


    test('debe de llamar onNewCategory si el input tiene un valor', () => {
        
        const inputValue = 'Saitama'
        
        const onNewCategory = jest.fn()
        //jest.fn es un mock, una simulacion, no es la implementacion de la funcion
        
        render(<AddCategory  onNewCategory={onNewCategory}/>)

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')
        
        fireEvent.input(input, {target : {value: inputValue}})
        fireEvent.submit(form)

        expect(input.value).toBe('')
        
        //screen.debug()

        expect(onNewCategory).toHaveBeenCalled()
        expect(onNewCategory).toHaveBeenCalledWith(inputValue)
    })

    test('no debe llamar a onNewCategory si el input esta vacio', () => {
        
        // // MI SOLUCION //
        
        const inputValue = ''
        
        const onNewCategory = jest.fn()

        render(<AddCategory  onNewCategory={onNewCategory}/>)

        const input = screen.getByRole('textbox')

        fireEvent.input(input, {target : {value: inputValue}})

        expect(onNewCategory).toHaveBeenCalledTimes(0)


        //SOLUCION DE FERNANDO HERRERA//

       // const onNewCategory = jest.fn()

        // render(<AddCategory  onNewCategory={onNewCategory}/>)

        // const form = screen.getByRole('textbox')

        // fireEvent.submit(form)

        // expect(onNewCategory).toHaveBeenCalledTimes(0)
        
        // expect(onNewCategory).not.toHaveBeenCalled()
        
    })

})


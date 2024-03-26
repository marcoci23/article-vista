import React from "react"
import { Sidebar } from "widgets/Sidebar"
import { screen,render } from "@testing-library/react";


describe('sidebar',()=>{
    test('',()=>{
        render(<Sidebar/>);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })
})
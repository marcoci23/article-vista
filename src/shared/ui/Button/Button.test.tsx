import { render, screen } from "@testing-library/react"
import React from "react";
import {Button} from "shared/ui/Button/Button"
import { ThemeButton } from "./Button";



describe('button',()=>{
    test('',()=>{
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument()
    })
})
describe('button',()=>{
    test('',()=>{
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass("clear");
        screen.debug()
    })
})
import React from 'react'
import { TestCon } from '.'

const TestProvider = ({ children }) => {
    const name = 'sandeep kumar '
    return (
        <>
            <TestCon.Provider value={{ name }}>
                {children}
            </TestCon.Provider>
        </>
    )
}

export default TestProvider
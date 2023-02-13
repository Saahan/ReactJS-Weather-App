import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import WeatherData from './weatherdata'

beforeAll(() => { })
afterEach(() => { })
afterAll(() => { })

test('loads the weather item', async () => {
    // Arrange  --------------------------------
    const data = {
        dt: 45641621,
        main: { temp: 20, feels_like: 22 },
        wind: { speed: 10 }
    }
    // Act  --------------------------------
    render(<WeatherData weatherObj={data} />)
    // Assert   --------------------------------
    //screen.debug()  // Shows the rendered HTML as if it renders in Chrome
    // Make sure it renders 
    expect(screen.getByTestId('11')).toBeInTheDocument()
    // Make sure the Temperature is displayed with the correct value
    expect(screen.getByTestId('11')).toHaveTextContent('Temperature 20C')
    // Make sure the Feels like is displayed with the correct value
    expect(screen.getByTestId('11')).toHaveTextContent('Feels Like 22C')
    // Make sure the Wind Seed is displayed with the correct value
    expect(screen.getByTestId('11')).toHaveTextContent('Wind Speed 10')
})
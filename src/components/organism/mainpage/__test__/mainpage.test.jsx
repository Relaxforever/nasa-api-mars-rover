import MainPage from "../mainpage";
import { fireEvent,  render, screen, waitFor } from "@testing-library/react"


it("renders The Word Curiosity", () =>  {
  render(<MainPage/>)
  const linkElement = screen.getByText("Curiosity");
  expect(linkElement).toBeInTheDocument();
})

it("renders The Word Spirit", () =>  {
    render(<MainPage/>)
    const linkElement = screen.getByText("Spirit");
    expect(linkElement).toBeInTheDocument();
  })

  it("renders The Word Opportunity", () =>  {
    render(<MainPage/>)
    const linkElement = screen.getByText("Opportunity");
    expect(linkElement).toBeInTheDocument();
  })

  test('Checks that the type of date changes to sol days',
  ()  => {
      render(
          <MainPage />
      )
      expect(screen.getByDisplayValue('sol')).not.toBeChecked()
      fireEvent.click(screen.getByDisplayValue('sol'))
      expect(screen.getByDisplayValue('sol')).toBeChecked()
  })


  test('Checks that the default checked day is earth Dates',
  ()  => {
      render(
          <MainPage />
      )
      expect(screen.getByDisplayValue('earth')).toBeChecked()
  })

  test('Checks that atleast one image loads by getting the alt info',
  async()  => {
    render(<MainPage/>)

    await waitFor(() => {
        expect(screen.getAllByAltText('FotoMarte', {exact: false})).toBeTruthy()
    })

  })

  test('Checks that the buttons appear after loading images',
  async()  => {
    render(<MainPage/>)
    await waitFor(() => {
        expect(screen.getByText('Siguiente')).toBeInTheDocument()
    })
    
  })

  test('Check that some  camera  options get disable when clicking another type  of landrover',
  async()  => {
    render(
        <MainPage />
    )
    
    fireEvent.click(screen.getByText('Opportunity'))
    await waitFor(() => {
        expect(screen.queryByText('MAHLI')).not.toBeInTheDocument()
    })
    })

    test('Check that curiosity cameras are loading',
    async()  => {
      render(
          <MainPage />
      )
      
      await waitFor(() => {
          expect(screen.getByText('MAHLI')).toBeInTheDocument()
      })
      })


      test('Check that the request is being loading in the endpoint',
      async()  => {
        render(
            <MainPage />
        )
        
        fireEvent.click(screen.getByText('Spirit'))
        await waitFor(() => {
            expect(screen.queryByText('MINITES')).not.toBeInTheDocument()
        })
        }
    
      )




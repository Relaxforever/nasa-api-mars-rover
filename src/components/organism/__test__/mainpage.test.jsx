import MainPage from "../mainpage/mainpage";
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
  



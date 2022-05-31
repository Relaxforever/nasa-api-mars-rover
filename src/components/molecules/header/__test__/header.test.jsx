import React from 'react';
import Header from '../header';
import { render, screen } from "@testing-library/react"


it("renders header text correctly", () =>  {
  render(<Header/>)
  const linkElement = screen.getByText("Nasa LandRover");
  expect(linkElement).toBeInTheDocument();
})
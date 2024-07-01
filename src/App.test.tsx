import React from 'react';
import App from './App';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import {Search} from './pages';

test('renders navbar', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const navbarElement = screen.getByRole('navigation');
  expect(navbarElement).toBeInTheDocument();
});

test('renders footer', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const footerElement = screen.getByRole('contentinfo');
  expect(footerElement).toBeInTheDocument();
});

test('renders search page', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const linkElement = screen.getByText(/Search GitHub for Organizations and Users/i);
  expect(linkElement).toBeInTheDocument();
});

test('show loading on button click', async () => {
  render(<BrowserRouter><Search /></BrowserRouter>);
  const inputElement = screen.getByPlaceholderText(/search/i);
  const buttonElement = screen.getByRole('button');
  fireEvent.change(inputElement, { target: { value: 'test' } });
  fireEvent.click(buttonElement);
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
});
import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";
import './App.css';

test("renders app", () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText("Enter expression");
  expect(inputElement).toBeInTheDocument();
});

test("performs addition", () => {
  render(<App />);
  fireEvent.change(screen.getByPlaceholderText("Enter expression"), {
    target: { value: "5+3" },
  });
  fireEvent.click(screen.getByText("Calculate"));
  expect(screen.getByText("8")).toBeInTheDocument();
});

test("performs subtraction", () => {
  render(<App />);
  fireEvent.change(screen.getByPlaceholderText("Enter expression"), {
    target: { value: "7-4" },
  });
  fireEvent.click(screen.getByText("Calculate"));
  expect(screen.getByText("3")).toBeInTheDocument();
});

test("performs multiplication", () => {
  render(<App />);
  fireEvent.change(screen.getByPlaceholderText("Enter expression"), {
    target: { value: "6*2" },
  });
  fireEvent.click(screen.getByText("Calculate"));
  expect(screen.getByText("12")).toBeInTheDocument();
});

test("performs division", () => {
  render(<App />);
  fireEvent.change(screen.getByPlaceholderText("Enter expression"), {
    target: { value: "9/3" },
  });
  fireEvent.click(screen.getByText("Calculate"));
  expect(screen.getByText("3")).toBeInTheDocument();
});

test("handles decimal numbers", () => {
  render(<App />);
  fireEvent.change(screen.getByPlaceholderText("Enter expression"), {
    target: { value: "1.5+2.5" },
  });
  fireEvent.click(screen.getByText("Calculate"));
  expect(screen.getByText("4")).toBeInTheDocument();
});

test("handles invalid input", () => {
  render(<App />);
  fireEvent.change(screen.getByPlaceholderText("Enter expression"), {
    target: { value: "invalid" },
  });
  fireEvent.click(screen.getByText("Calculate"));
  expect(screen.getByText("Error")).toBeInTheDocument();
});

test("handles division by zero", () => {
  render(<App />);
  fireEvent.change(screen.getByPlaceholderText("Enter expression"), {
    target: { value: "9/0" },
  });
  fireEvent.click(screen.getByText("Calculate"));
  expect(screen.getByText("Infinity")).toBeInTheDocument();
});

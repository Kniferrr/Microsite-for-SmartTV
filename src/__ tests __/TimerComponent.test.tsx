import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import TimerComponent from "../components/TimerComponent/TimerComponent";

test("TimerComponent renders correctly", () => {
  render(
    <MemoryRouter>
      <TimerComponent />
    </MemoryRouter>
  );

  const timerElement = screen.getByText("10");
  expect(timerElement).toBeTruthy();

  const redirectMessage = screen.queryByText(
    "Перенаправление на главную страницу..."
  );
  expect(redirectMessage).toBeNull();
});

test("TimerComponent redirects to main page when time reaches 0", () => {
  render(
    <MemoryRouter>
      <TimerComponent />
    </MemoryRouter>
  );

  jest.useFakeTimers();
  jest.advanceTimersByTime(10000);
});

test("TimerComponent updates time on mouse move", () => {
  render(
    <MemoryRouter>
      <TimerComponent />
    </MemoryRouter>
  );

  fireEvent.mouseMove(window);

  const updatedTimeElement = screen.getByText("10");
  expect(updatedTimeElement).toBeTruthy();
});

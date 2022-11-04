# Accessibility issues

The following accessibility issues exist in this project.

## Styling issues

- The .footer has too low color contrast.
- The flight time has too low color contrast.

## General issues

- The document has no language set.
- The document has no title tag.
- There are no landmark roles used to structure the page.

## Filter issues

- Both input fields miss a proper label.

## Flights list

- Carrier icon is missing textual representation.
- The booking button is using an anchor element. Is it a navigation?
- Is there a more semantic tag for the departure time?

## Hotels list

- The star rating has no good textual representation.
- The expand/collapse for details could is lacking ARIA and labels.
- The booking button is using an anchor element. Is it a navigation?
- The recommendation thumb up is only using color to convey its information.

## Tabs

- Should use proper ARIA roles and aria-selected.
- Should be buttons.

## Confirmation dialog

- Should use dialog role.
- Buttons only use icons.
- Dialog should exit on escape. This is implemented, but why isn't it working?
- Dialog should trap focus inside.
- Can the inert attribute be helpful?

- Is there an html element, that is a better fit for all these issues? (dialog) 

## Accessibility suggestions

These points could improve the accessibility event further:

- Sometimes it's hard to keep the context when navigating with a screen reader
  over multiple similar rows, like in this booking list. Maybe aria-describedby
  could be useful to give more context to the button.

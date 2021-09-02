# Relevance

Forms and inputs can have different states

- one or more inputs are invalid
  - output input-specific error messages (highlight problematic inputs)
  - ensure that the form CANNOT be submitted / saved
- all inputs are valid
  - allow form submission / save

# When to validate?

- when form is submitted (feedback to late)
- when input is losing focus (problem if user comes back and input is still invalid)
- every keystroke, ... (lots of errors at first)
- BEST combination!

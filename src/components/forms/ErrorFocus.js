import { useEffect } from "react";
import { useFormikContext } from "formik";

const ErrorFocus = props => {
  const { onError } = props;
  // Get the context for the Formik form this component is rendered into.
  const { isSubmitting, isValidating, errors } = useFormikContext();

  useEffect(() => {
    // Get all keys of the error messages.
    const keys = Object.keys(errors);

    // Whenever there are errors and the form is submitting but finished validating.
    if (keys.length > 0 && isSubmitting && !isValidating) {
      onError();
    }
  }, [isSubmitting, isValidating, errors, onError]);

  // This component does not render anything by itself.
  return null;
};

export default ErrorFocus;

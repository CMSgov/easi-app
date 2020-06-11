import React, { useEffect } from 'react';
import { Formik, FormikProps, Form } from 'formik';
import { SystemIntakeForm } from 'types/systemIntake';
import { SystemIntakeReview } from 'components/SystemIntakeReview';
import Button from 'components/shared/Button';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from 'reducers/rootReducer';
import {
  fetchSystemIntake,
  submitSystemIntake,
  clearSystemIntake
} from 'types/routines';
import usePrevious from 'hooks/usePrevious';

const Review = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { systemId } = useParams();

  const isSubmitting = useSelector(
    (state: AppState) => state.systemIntake.isSubmitting
  );

  const isLoading = useSelector(
    (state: AppState) => state.systemIntake.isLoading
  );

  const systemIntake = useSelector(
    (state: AppState) => state.systemIntake.systemIntake
  );

  const error = useSelector((state: AppState) => state.systemIntake.error);
  const prevIsSubmitting = usePrevious(isSubmitting);

  useEffect(() => {
    if (prevIsSubmitting && !isSubmitting && !error) {
      history.push('/');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitting]);

  useEffect(() => {
    dispatch(fetchSystemIntake(systemId));
    // This return will clear system intake from store when component is unmounted
    return () => {
      dispatch(clearSystemIntake());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isLoading === false && (
        <Formik
          initialValues={systemIntake}
          onSubmit={values => {
            dispatch(submitSystemIntake(values));
          }}
          validateOnBlur={false}
          validateOnChange={false}
          validateOnMount={false}
        >
          {(formikProps: FormikProps<SystemIntakeForm>) => {
            const { values } = formikProps;

            return (
              <div className="system-intake__review margin-bottom-7">
                <Form>
                  <h1 className="font-heading-xl margin-top-4">
                    Check your answers before sending
                  </h1>
                  <SystemIntakeReview systemIntake={values} />
                  <hr className="system-intake__hr" />
                  <h2 className="font-heading-xl">What happens next?</h2>
                  <p>
                    The Governance Review Admin Team will review and get back to
                    you with <strong>one of these</strong> outcomes:
                  </p>
                  <ul className="usa-list">
                    <li>
                      direct you to go through the Governance Review process
                    </li>
                    <li>or decide there is no further governance needed</li>
                  </ul>
                  <p>They will get back to you in two business days.</p>
                  <Button
                    type="button"
                    outline
                    onClick={() => {
                      formikProps.setErrors({});
                      const newUrl = 'request-details';
                      history.push(newUrl);
                      window.scrollTo(0, 0);
                    }}
                  >
                    Back
                  </Button>
                  <Button type="submit" disabled={isSubmitting}>
                    Send my intake request
                  </Button>
                </Form>
              </div>
            );
          }}
        </Formik>
      )}
    </>
  );
};

export default Review;

import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

import { ROUTES } from '~/constants/routes/routes';

export const NotFoundPage = () => {
    const navigate = useNavigate();
    const goHomeHandler = () => navigate(ROUTES.LAYOUT.url);
    const goBackHandler = () => navigate(-1);

    return (
        <section>
            <div>
                <h1>404</h1>
                <p>Страница не найдена!</p>
                <div>
                    <Button onClick={goBackHandler}>Назад</Button>
                    <Button onClick={goHomeHandler}>На главную</Button>
                </div>
            </div>
        </section>
    );
};

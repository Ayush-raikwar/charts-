import React from 'react'
import { Line } from 'react-chartjs-2'
import Container from 'react-bootstrap/Container'
import { Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components'



const dataArr = [12, 19, 3, 5, 2, 3, 12, 51, 61, 44, 24, 11, 12, 64, 21, 74, 23, 26, 63, 14, 50, 30, 26, 42 ]
const ButtonContainerx = styled.div`
    position: absolute;
    left:50%;
    top:11%;
    transform: translate(-50%, -50%);
    button{
        margin:auto 1rem auto 1rem;
        background-color: rgb(0,0,0,0.06);
        border-radius: 1rem;
        color: rgb(0,0,0,0.9);
        padding: 0.275rem 1.275rem;
        font-weight:900;
        &:hover{
            background-color: rgb(0,0,0,0.09);
        }
    }
`
const StyledContainer = styled(Container)`
    position: relative;
`

export const BarChart:React.FC<any> = ():any => {

    return(
        <div>
            <StyledContainer>
                <ButtonContainerx>
                    <Button variant="light">Buys</Button>
                    <Button variant="light">Sells</Button>
                    <Button variant="light">Fees</Button>
                </ButtonContainerx>
                <Row>
                    <Line
                        data={{
                            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Grey', 'Magenta' ,'Purple', 'Lavender', 'Orange', 'Paleviolet', 'Orange', 'Grey', 'Magenta' ,'Purple', 'Lavender', 'Orange', 'Paleviolet'],
                            datasets: [{
                                label: '# of Votes',
                                data: dataArr,
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)'
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)'
                                ],
                                borderWidth: 1
                            }]
                        }}
                        height={200}
                        width={400}
                        options={{
                            maintainAspectRatio: false
                        }}
                    />
                </Row>

            </StyledContainer>
        </div>
    )
}
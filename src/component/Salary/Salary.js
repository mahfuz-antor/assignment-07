import React from 'react';

const Money = (props) => {
    const player = props.player;
    console.log(props.player)

    // console.log(player);
    // let totalSalary = 0;
    // // for (let i = 0; i < player.length; i++) {
    // //     const data = player[i];
    // //     console.log(data)
    // //     console.log(data.salary)
    // //     totalSalary = totalSalary + data.salary;
    // // }
    const totalSalary = player.reduce( (sum, data) => sum + Number(data.salary),[])
    console.log(totalSalary)
    return (
        <div>
            <h2>This is a player:{player.length}</h2>
            <p>Total Salary: {totalSalary}</p>
        </div>
    );
};

export default Money;
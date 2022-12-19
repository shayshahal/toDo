export default (name, desc, date, prio) => 
{
    const isComplete = false;
    if(name === '' || desc === '')
        return false;
    return {name,desc,date,prio, isComplete};
};
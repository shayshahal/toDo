export default (name, desc, date, prio) => 
{
    const isComplete = false;
    if(name === '' || desc === '' || !date)
        return false;
    return {name,desc,date,prio, isComplete};
};
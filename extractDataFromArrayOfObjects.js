let data=[{"attributes":{"type":"Role__c","url":"/services/data/v42.0/sobjects/Role__c/a7MZ00000000GVQMA2"},"Id":"a7MZ00000000GVQMA2"},{"attributes":{"type":"Role__c","url":"/services/data/v42.0/sobjects/Role__c/a7MZ00000000GYKMA2"},"Id":"a7MZ00000000GYKMA2"},{"attributes":{"type":"Role__c","url":"/services/data/v42.0/sobjects/Role__c/a7MZ00000004L4pMAE"},"Id":"a7MZ00000004L4pMAE"},{"attributes":{"type":"Role__c","url":"/services/data/v42.0/sobjects/Role__c/a7MZ00000000GjZMAU"},"Id":"a7MZ00000000GjZMAU"},{"attributes":{"type":"Role__c","url":"/services/data/v42.0/sobjects/Role__c/a7MZ00000000GjeMAE"},"Id":"a7MZ00000000GjeMAE"},{"attributes":{"type":"Role__c","url":"/services/data/v42.0/sobjects/Role__c/a7MZ00000000GjoMAE"},"Id":"a7MZ00000000GjoMAE"},{"attributes":{"type":"Role__c","url":"/services/data/v42.0/sobjects/Role__c/a7MZ00000000GjtMAE"},"Id":"a7MZ00000000GjtMAE"}];

let result=[];
for(let i=0;i<data.length;i++)
{
  result.push(data[i].Id); 
}
console.log(result);


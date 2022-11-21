window.Entry = document.querySelector('iframe.css-1sbyuvq.eaizycc0').contentWindow.Entry;
window.EntryStatic = document.querySelector('iframe.css-1sbyuvq.eaizycc0').contentWindow.EntryStatic;
alert('툴입니다.');
const lvname = prompt('변수및 리스트 이름을 입력해주세요.');
const mode = prompt(`1(리스트 항목삭제) 2(리스트 항목추가) 3(항목 값 변경) 4(변수 값 변경) 5(뒤에 반복 리스트 항목추가) 6(반복 리스트 항목삭제) 7(앞에 반복 리스트 항목추가)`);
switch (mode){
    case '1':
        const Information1 = prompt("몇번째 항목을 삭제 하실 건가요?");
        Entry.variableContainer.getListByName(lvname).deleteValue(Information1); 
        break;
    case '2':
        const Information7 = prompt('추가하실 내용을 입력해주세요.');
        Entry.variableContainer.getListByName(lvname).appendValue(Information7); 
        break;
    case '3':
        const Information2 = prompt("몇번째 줄을 수정하실 건가요?");
        const Information8 = prompt("무슨 내용으로 수정하실 건가요?");
        Entry.variableContainer.getListByName(lvname).replaceValue(Information2, Information8); 
        break;
    case '4':
        let Information3 = prompt("어떤 내용으로 바꾸실 건가요?");
        Entry.variableContainer.getVariableByName(lvname).setValue(Information3)
        break;
    case '5':
        let Information9 = prompt("어떤 내용을 추가하실 건가요?");
        const loop2 = prompt('몇번 반복 추가 할 것인가요?');
        for(i=0;i<Number(loop2);i++){
        document.getElementsByTagName('iframe')[0].contentWindow.Entry.variableContainer.getListByName(lvname).appendValue(Information9);
        };
        break;
    case '6':
        const loop1 = prompt('몇번 반복 삭제 할 것인가요?');
        for(i=0;i<Number(loop1);i++){
            document.getElementsByTagName('iframe')[0].contentWindow.Entry.variableContainer.getListByName(lvname).deleteValue(i);
        };
        break;
    case '7':
        let Information6 = prompt("어떤 내용을 추가하실 건가요?");
        const loop3 = prompt("몇번 반복 추가 하실 건가요?");
        for(i=0;i<Number(loop3);i++){
             document.getElementsByTagName('iframe')[0].contentWindow.Entry.variableContainer.getListByName(lvname).insertValue(1, Information6);
        }
}
function skillsMember(){
    return {
        restrict: 'E',
        templateURL: 'modules/skills/views/member.html',
        controller: 'SkillMemberController',
        controllerAs: 'vm',
        scope: {
            member: '='
        }
    };
}
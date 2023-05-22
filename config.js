module.exports = {
    username: "bet-renovate-bot",
    gitAuthor: "Bet Renovate Bot <123456+cdc-coe-botfrey[bot]@users.noreply.github.enterprise.com>",
    platform: 'github',
    dependencyDashboard: true,
    onboardingConfig: {
        extends: ['config:base',':rebaseStalePrs'],
    },
    labels: ["renovatebot"],
    // schedule: ["every weekend"],
    packageRules: [
        {
            matchPackageNames: ["hashicorp/terraform"],
            groupName: "terraform",
        }
    ],
    // Managers https://docs.renovatebot.com/modules/manager/#enabling-and-disabling-managers
    enabledManagers: ["terraform"],
    lockFileMaintenance: {
        enabled: true,
        automerge: true
    },
    updateLockFiles: true,
    minor: {
        automerge: true
    },
    patch: {
        automerge: true
    },
    pin: {
        automerge: true
    },
    repositories: ['bertrandmbanwi/devops-fully-automated-infra'],
};

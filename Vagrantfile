Vagrant.configure(2) do |config|

  config.vm.box = "bento/ubuntu-16.04" 
  config.vm.hostname = "enhancer"
  config.vm.network :private_network, ip: "192.168.31.23"
  config.vm.synced_folder ".", "/var/www/html", owner: "www-data", group: "www-data"
  config.vm.network "forwarded_port", guest: 80, host: 8080
  config.vm.provider "virtualbox" do |v|
    v.memory = 2048
    v.cpus = 2
  end
  config.vm.provision "chef_solo" do |chef|
    chef.cookbooks_path = "chef/cookbooks"
    chef.roles_path = "chef/roles"
    chef.add_role("base")  
    chef.environments_path = "chef/environments"
    chef.environment = "development"
  end

end

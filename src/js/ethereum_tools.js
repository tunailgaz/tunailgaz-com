document.addEventListener('DOMContentLoaded', (event) => {
  class EthereumTools {
    constructor() {
      this.password = document.getElementById('password');
      this.repeat = document.getElementById('repeat');
      this.times = document.getElementById('times');
      this.keygen_box = document.getElementById('keygen_box');
      this.generate_btn = document.getElementById('generate');
      this.form = document.getElementById('form');
      this.clear = document.getElementById('clear')
    }

    listen () {
      if(this.form){
        this.form.addEventListener('submit',(e) => {
          e.preventDefault()
          this.add_loading();
          this.remove_wallet_display();
          this.create_wallet();
        })
      }

      if(this.clear){
        this.clear.addEventListener('click',()=> {
          this.form?.reset()
          this.generate_btn.focus()
        })
      }
    }

    create_wallet_element (wallet) {
      let wallet_element = document.createElement('div');
      wallet_element.classList.add('column','is-full');
      wallet_element.setAttribute('id','wallet-display');
      wallet_element.innerHTML =
       `
        <div class="box">
        <div class="delete"></div>
            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Public Address:</label>
                </div>
                <div class="field-body">
                    <div class="field is-grouped ">
                        <div class="control is-expanded">
                             <input class="input"  value="${wallet.address}">
                        </div>
                        <div class="control" style="padding-top: 8px">
                                <span class="icon is-small"><i class="fas fa-link"></i></span>
                                <a target="_blank" href="https://etherscan.io/address/${wallet.address}">Check Balance</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Private Key:</label>
                </div>
                <div class="field-body">
                    <div class="field"> 
                        <div class="control">
                            <input class="input" value="${wallet.privateKey}">
                        </div> 
                    </div>
                </div>
            </div>
        </div>
      `
      this.keygen_box.after(wallet_element)
      for(let el of document.querySelectorAll('.delete')){
        el.addEventListener('click',()=> {
          this.remove_wallet_display();
        })
      }
      this.remove_loading();
    }

    remove_wallet_display () {
      let wallet_element = document.getElementById('wallet-display')
      if(wallet_element){
        wallet_element.parentNode.removeChild(wallet_element)
      }
    }

    display_error(message) {
      let error_element = document.createElement('div');
      error_element.classList.add('column','is-full');
      error_element.setAttribute('id','wallet-display');
      error_element.innerHTML =
      `
        <div class="box">
            <div class="notification is-danger">
                <strong>Something went wrong...</strong>
                <p>${message}</p>
            </div>
        </div>
      `
      this.keygen_box.after(error_element)
    }

    generate_private_key () {
      if(!this.form?.reportValidity()){
        return false;
      }
      if(!this.password?.value?.trim()){
        throw new Error('Password required')
      }
      try {
        let password_text = this.password.value.trim()
        let repeat_password = parseInt(this.repeat.value)
        let repeated_password = password_text.repeat(repeat_password)
        let apply_times = parseInt(this.times.value)
        let private_key = ethers.utils.id(repeated_password);

        for(let i=1; i<apply_times; i++){
          private_key = ethers.utils.id(private_key)
        }
        return private_key;

      }catch (error) {
        console.error(error)
        throw new Error('Something went wrong..')
      }
    }

    add_loading () {
      this.keygen_box?.classList?.add('element','is-loading');
    }

    remove_loading() {
      this.keygen_box?.classList?.remove('element','is-loading');
    }

    create_wallet () {
      try {
        let private_key = this.generate_private_key();
        if(private_key){
          let wallet = new ethers.Wallet(this.generate_private_key())
          this.create_wallet_element(wallet);
        }
      }catch (error){
        this.display_error(error.message);
        this.remove_loading();
      }
    }
  }

  let ethereum_tool = new EthereumTools();
  ethereum_tool.listen();
});
